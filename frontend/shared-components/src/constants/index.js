export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
export const WS_URL = process.env.REACT_APP_WS_URL || 'ws://localhost:5000';

export const CATEGORIES = [
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Graphic Design',
  'Content Writing',
  'Marketing',
  'Data Science',
  'DevOps',
  'Video Production',
  'Translation',
  'Virtual Assistant',
  'Consulting',
];

export const ORDER_STATUSES = [
  'open',
  'in_progress',
  'completed',
  'cancelled',
  'disputed',
];

export const USER_ROLES = ['freelancer', 'client', 'admin', 'dev'];

export const BID_STATUSES = ['pending', 'accepted', 'rejected', 'withdrawn'];
