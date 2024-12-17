import { redirect } from 'next/navigation';

export default function AdminHome() {
  redirect('/admin/dashboard'); // Redirige vers le tableau de bord
}
                      