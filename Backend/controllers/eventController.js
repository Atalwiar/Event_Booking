import Event from "../model/Event";

const getAllEvents = async (req, res) => {
  try {
    const filter = {};
    if(filter.category) filter.category = req.query.category;
    if(filter.location) filter.location = req.query.location;
    const events = await Event.find(filter);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEvent = async (req,res) => {
  const {title, description, date, location, category, totalSeats, ticketPrice} = req.body;
  try {
    const event = await Event.create({title,description,date,location,category,totalSeats,ticketPrice});
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export {getAllEvents};