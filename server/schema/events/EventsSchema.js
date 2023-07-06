import { model, Schema } from 'mongoose';

const EventsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    organizer: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
    address: {
      type: { isOnline: Boolean, location: String },
      required: true,
    },
    image: {
      type: String,
      require: false,
    },
    date: {
      type: Date,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    logo: {
      type: String,
      required: false,
    },
    tags: {
      type: [String],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const EventModel = model('events', EventsSchema);