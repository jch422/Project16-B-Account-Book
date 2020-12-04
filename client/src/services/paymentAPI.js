import axios from 'axios';
import { getOptions, patchOptions, deleteOptions } from '../../util/axios';

const API_URL = process.env.API_URL;

export async function getPayment() {
  const url = `${API_URL}/payment/`;
  const { data } = await axios(getOptions(url));

  return data;
}

export async function getAllTransaction(cardName) {
  const url = `${API_URL}/payment/${cardName}`;
  const { data } = await axios(getOptions(url));

  return data;
}

export async function patchPayment({ paymentName }) {
  const url = `${API_URL}/payment/`;
  const body = { paymentName };

  const { data } = await axios(patchOptions(url, body));

  return data;
}

export async function deletePayment({ paymentName }) {
  const url = `${API_URL}/payment/`;
  const body = { paymentName };

  const { data } = await axios(deleteOptions(url, body));

  return data;
}

export async function updatePayment({ selectedCardName, newCardName }) {
  const url = `${API_URL}/payment/update`;
  const body = { selectedCardName, newCardName };

  const { data } = await axios(patchOptions(url, body));

  return data;
}