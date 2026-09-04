export type ProjectCategory = 'all' | '2d-plans' | '3d-models' | 'interiors' | 'exteriors';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
  badge?: string;
  projectTypeKey: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: '2d-plans' | '3d-models' | 'interiors' | 'exteriors';
  categoryLabel: string;
  location: string;
  dimensions: string;
  areaSqFt: number;
  description: string;
  imageUrl: string;
  blueprintImageUrl?: string;
  features: string[];
  vastuCompliant: boolean;
  completionYear: string;
}

export interface WhyChoosePillar {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  projectType: string;
  plotArea?: string;
  budgetRange?: string;
  message: string;
}
