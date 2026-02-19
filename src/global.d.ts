type TodoObjectType = {
  id: string;
  name: string;
  detail: string;
  repeatEveryMonth: boolean;
  priority: 'high' | 'medium' | 'low';
  status: 'done' | 'active' | 'pending';
}