import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, CheckCircle, Clock } from 'lucide-react';

const AdminStats = () => {
  const stats = [
    {
      title: 'Total Applications',
      value: '142',
      icon: FileText,
      change: '+12%'
    },
    {
      title: 'Active Users',
      value: '89',
      icon: Users,
      change: '+5%'
    },
    {
      title: 'Approved',
      value: '67',
      icon: CheckCircle,
      change: '+8%'
    },
    {
      title: 'Pending',
      value: '23',
      icon: Clock,
      change: '-3%'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default AdminStats;