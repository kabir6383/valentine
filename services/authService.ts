import { CoupleData } from '../types';

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxNhgIcjMLNnZ5GhVi74GdSs7kC-L5wF1J85tSY0vJVwK1cFW4uYXNiLBszEywAKYtc/exec";

export const storeLoginAttempt = async (name: string, partner: string): Promise<void> => {
  try {
    console.log(`Connecting to heart...`);
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        partner: partner.trim()
      }),
    });
    console.log(`Success! Connection to heart established.`);
  } catch (error) {
    console.error(`Heart connection failed:`, error);
  }
};

export const verifyCouple = async (name: string, partner: string): Promise<boolean> => {
  const n = name.trim();
  const p = partner.trim();

  if (n.length > 0 && p.length > 0) {
    await storeLoginAttempt(n, p);
    return true;
  }

  return false;
};