// Base Integration Class
export class BaseIntegration {
  constructor(name, apiKey, apiSecret = null) {
    this.name = name;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }

  async authenticate() {
    throw new Error('authenticate() must be implemented');
  }

  async fetchOrders() {
    throw new Error('fetchOrders() must be implemented');
  }

  async fetchUserProfile() {
    throw new Error('fetchUserProfile() must be implemented');
  }

  async submitBid(orderId, bidData) {
    throw new Error('submitBid() must be implemented');
  }
}
