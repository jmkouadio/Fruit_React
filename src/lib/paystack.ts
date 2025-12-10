import { supabase } from "@/integrations/supabase/client";

export const formatCFA = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount) + ' FCFA';
};

export const generateReference = (): string => {
  return `JB-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

interface InitializePaymentParams {
  email: string;
  amount: number;
  reference: string;
  callback_url: string;
}

interface PaymentResponse {
  authorization_url: string;
  access_code: string;
  reference: string;
}

export const initializePaystackPayment = async (
  params: InitializePaymentParams
): Promise<PaymentResponse> => {
  const { data, error } = await supabase.functions.invoke('create-paystack-payment', {
    body: params,
  });

  if (error) {
    throw new Error(error.message || 'Erreur lors de l\'initialisation du paiement');
  }

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
};

interface VerifyPaymentResponse {
  success: boolean;
  status: string;
  amount: number;
  currency: string;
  reference: string;
  paid_at: string;
  error?: string;
}

export const verifyPaystackPayment = async (
  reference: string
): Promise<VerifyPaymentResponse> => {
  const { data, error } = await supabase.functions.invoke('verify-paystack-payment', {
    body: { reference },
  });

  if (error) {
    throw new Error(error.message || 'Erreur lors de la vérification du paiement');
  }

  return data;
};
