export interface Transaction {
  date: string;
  amount: number;
  transactionType: 'purchase' | 'withdrawal' | 'refund' | 'transfer';
  paymentType: 'card' | 'cash' | 'bank' | 'refund';
  description: string;
  type: string;
};

export interface CardHolder {
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  freezed: boolean;
  transactions: Transaction[];
};
