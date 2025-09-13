import React from 'react';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Utensils, 
  BookOpen, 
  Bus,
  Clock,
  Bell,
  GraduationCap
} from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import campusHero from '@/assets/campus-hero.jpg';

const Index = () => {
  const services = [
    { 
      title: 'Campus Map', 
      description: 'Find buildings, parking, and navigate campus easily',
      icon: MapPin,
      color: 'primary' as const
    },
    { 
      title: 'Events Calendar', 
      description: 'Stay updated with campus events and activities',
      icon: Calendar,
      color: 'secondary' as const
    },
    { 
      title: 'Directory', 
      description: 'Search for faculty, staff, and student contacts',
      icon: Users,
      color: 'accent' as const
    },
    { 
      title: 'Dining Services', 
      description: 'View menus, hours, and dining location information',
      icon: Utensils,
      color: 'primary' as const
    },
    { 
      title: 'Library Hours', 
      description: 'Check library schedules and available resources',
      icon: BookOpen,
      color: 'secondary' as const
    },
    { 
      title: 'Shuttle Schedule', 
      description: 'Real-time campus shuttle tracking and schedules',
      icon: Bus,
      color: 'accent' as const
    }
  ];

  const quickInfo = [
    { label: 'Library', status: 'Open until 11 PM', icon: BookOpen },
    { label: 'Dining Hall', status: 'Serving until 9 PM', icon: Utensils },
    { label: 'Next Shuttle', status: '3 minutes', icon: Bus }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-primary-foreground shadow-elevated">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Campus Assistant</h1>
            </div>
            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 border-white/30">
              <Bell className="h-4 w-4 mr-2" />
              Alerts
            </Button>
          </div>
          
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Welcome to Your Smart Campus</h2>
            <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Your one-stop hub for campus information, services, and navigation
            </p>
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Quick Info Bar */}
      <div className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {quickInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <info.icon className="h-4 w-4 text-primary" />
                <span className="font-medium">{info.label}:</span>
                <span>{info.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Campus Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-card">
          <img 
            src={campusHero} 
            alt="Campus overview showing buildings and green spaces" 
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Services Grid */}
        <section>
          <h3 className="text-2xl font-bold text-foreground mb-6">Campus Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                onClick={() => console.log(`Navigate to ${service.title}`)}
              />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-primary hover:shadow-elevated transition-all duration-200">
              <Clock className="h-4 w-4 mr-2" />
              View Schedule
            </Button>
            <Button variant="secondary">
              <MapPin className="h-4 w-4 mr-2" />
              Find Parking
            </Button>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming Events
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Smart Campus Assistant • Your digital campus companion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;