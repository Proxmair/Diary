import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    select: false,
  },
  whatsApp:{
    link:String,
    qrcode:String,
  },
  socials:[
    {
      image:String,
    }
  ],
  profile:{
    aboutData:{
      text:String,
      skillIcons:[
        {
          link:String,
          image:String
        }
      ]
    },
    serviceData:{
      text:String,
      services:[
        {
          serviceHeading:String,
          service:String
        }
      ]
    }
  }
});

export const User = mongoose.model("User", userSchema);
