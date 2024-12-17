import { redirect } from 'next/navigation';

export default function Deconnexion() {
  // Simule une déconnexion, puis redirige vers la page de login
  redirect('/login');
  return null;
}
