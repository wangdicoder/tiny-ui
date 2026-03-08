export type Locale = {
  locale: string;
  DatePicker: {
    weeks: string[];
    months: string[];
    today: string;
    selectDate: string;
    selectMonth: string;
    selectYear: string;
  };
  TimePicker: {
    selectTime: string;
  };
  Modal: {
    okText: string;
    cancelText: string;
  };
  PopConfirm: {
    okText: string;
    cancelText: string;
  };
  Empty: {
    description: string;
  };
};
