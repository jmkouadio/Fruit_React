import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { verifyPaystackPayment, formatCFA } from '@/lib/paystack';

const PaymentCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { clearCart } = useCart();
  const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading');
  const [paymentDetails, setPaymentDetails] = useState<{
    amount: number;
    reference: string;
  } | null>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get('reference') || searchParams.get('trxref');
      
      if (!reference) {
        setStatus('failed');
        return;
      }

      try {
        const result = await verifyPaystackPayment(reference);
        
        if (result.success) {
          setStatus('success');
          setPaymentDetails({
            amount: result.amount,
            reference: result.reference,
          });
          clearCart();
        } else {
          setStatus('failed');
        }
      } catch (error) {
        console.error('Verification error:', error);
        setStatus('failed');
      }
    };

    verifyPayment();
  }, [searchParams, clearCart]);

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="bg-card rounded-3xl p-8 shadow-card max-w-md w-full text-center">
        {status === 'loading' && (
          <>
            <Loader2 className="w-20 h-20 text-primary mx-auto mb-6 animate-spin" />
            <h1 className="text-2xl font-bold mb-2">Vérification du paiement...</h1>
            <p className="text-muted-foreground">Veuillez patienter</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle2 className="w-20 h-20 text-secondary mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-2">Paiement réussi !</h1>
            <p className="text-muted-foreground mb-6">
              Merci pour votre commande. Vous recevrez un email de confirmation.
            </p>
            {paymentDetails && (
              <div className="bg-muted rounded-xl p-4 mb-6 text-left">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Montant</span>
                  <span className="font-bold">{formatCFA(paymentDetails.amount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Référence</span>
                  <span className="font-mono text-sm">{paymentDetails.reference}</span>
                </div>
              </div>
            )}
            <Button onClick={() => navigate('/')} size="lg" className="w-full">
              Retour à l'accueil
            </Button>
          </>
        )}

        {status === 'failed' && (
          <>
            <XCircle className="w-20 h-20 text-destructive mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-2">Paiement échoué</h1>
            <p className="text-muted-foreground mb-6">
              Le paiement n'a pas pu être complété. Veuillez réessayer.
            </p>
            <div className="space-y-3">
              <Button onClick={() => navigate('/cart')} size="lg" className="w-full">
                Réessayer
              </Button>
              <Button 
                onClick={() => navigate('/')} 
                variant="outline" 
                size="lg" 
                className="w-full"
              >
                Retour à l'accueil
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentCallback;
