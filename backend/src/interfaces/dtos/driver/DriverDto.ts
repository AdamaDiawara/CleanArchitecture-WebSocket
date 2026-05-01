export type DriverProfileDto = {
  id:            string;
  name:          string;
  transportType: string;
  isOnline:      boolean;
  isVerified:    boolean;
};

export type AvailableDeliveryDto = {
  orderId:           string;
  restaurantName:    string;
  restaurantAddress: string;
  deliveryAddress:   string;
  itemCount:         number;
  total:             number;
  estimatedAt:       string;
  createdAt:         string;
};
