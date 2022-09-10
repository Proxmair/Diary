import { User } from "../model/User.js";
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email, password });
  
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Invalid email or password",
        });
      }
  
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  
      res
        .status(200)
        .cookie("token", token, {
          expires: new Date(Date.now() + 600000),
          httpOnly: true,
        })
        .json({
          success: true,
          message: "Logged In Successfully",
        });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  export const logout = async (req, res) => {
    try {
      res
        .status(200)
        .cookie("token", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
        })
        .json({
          success: true,
          message: "Logged Out Successfully",
        });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  export const getUser = async (req, res) => {
    try {
      const user = await User.findOne().select("-_id -password -email");
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  export const myProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  export const addAbout = async (req, res) => {
    try {
      const {text,link,image}=req.body;
      const user = await User.findById(req.user._id);
      user.profile.aboutData.text=text;
      user.profile.aboutData.skillIcons.unshift({
        link,
        image
      })
      await user.save();

      res.status(200).json({
        success: true,
        message:"New Skills in About page added"
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  export const addService = async (req, res) => {
    try {
      const {text,serviceHeading,service}=req.body;
      const user = await User.findById(req.user._id);
      user.profile.serviceData.text=text;
      user.profile.serviceData.services.unshift({
        serviceHeading,
        service
      })
      await user.save();
      res.status(200).json({
        success: true,
        message:"New Service in Service page added"
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

  export const updateSocials = async (req, res) => {
    try {
      const {whatsApp,socials}=req.body;
      const user = await User.findById(req.user._id);
      user.whatsApp=whatsApp;
      user.socials=socials;
      

      await user.save();
      res.status(200).json({
        success: true,
        message:"Social Updated"
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  