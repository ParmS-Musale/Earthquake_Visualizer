export const getMagnitudeColor = (magnitude: number): string => {
  if (magnitude >= 6.0) return '#dc2626';
  if (magnitude >= 5.0) return '#ea580c';
  if (magnitude >= 4.0) return '#f59e0b';
  if (magnitude >= 3.0) return '#eab308';
  if (magnitude >= 2.0) return '#84cc16';
  return '#22c55e';
};

export const getMagnitudeSize = (magnitude: number): number => {
  if (magnitude >= 6.0) return 20;
  if (magnitude >= 5.0) return 16;
  if (magnitude >= 4.0) return 14;
  if (magnitude >= 3.0) return 12;
  if (magnitude >= 2.0) return 10;
  return 8;
};

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getTimeAgo = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }
  return 'Just now';
};
