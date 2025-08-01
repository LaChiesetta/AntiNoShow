export type User = {
  name: string;
  email: string;
  phone: string;
};

export type UserInfoProps = {
  user: User;
};

export type BookingPageProps = {
  params: {
    id: string;
  };
};

export type BookingDetailsProps = {
  details: {
    date: string;         // ISO format expected
    time: string;         // e.g. "19:30"
    guests: number;
    notes?: string;
  };
  id: string;
  user: User;
};
