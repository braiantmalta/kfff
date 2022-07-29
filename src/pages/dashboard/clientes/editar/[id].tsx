import { CustomerUpdateTemplate } from '@template/customers/update';
import { useRouter } from 'next/router';

export default function CustomerUpdatePage() {
  const { isReady, query } = useRouter();

  return isReady ? (
    <CustomerUpdateTemplate customer_id={Number(query.id)} />
  ) : null;
}
