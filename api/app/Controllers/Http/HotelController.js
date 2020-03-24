"use strict";
const Hotel = use("App/Models/Hotel");

class HotelController {
  async create({ request }) {
    const {
      id,
      hotelName,
      hotelId,
      reference,
      baseUrl,
      address
    } = request.all();
    return await Hotel.create({
      hotelName,
      hotelId,
      reference,
      baseUrl,
      address
    });
  }
  async index() {
    const hotels = await Hotel.all();
    return hotels.toJSON();
  }
}

module.exports = HotelController;
