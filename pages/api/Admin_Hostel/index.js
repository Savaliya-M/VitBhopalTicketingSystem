import dbConnect from "../../../database/conn";
import Hostel from "../../../model/Hostel";

export default async function Hostel_Tickets(req, res) {
  if (req.method == "GET") {
    try {
      //connection to database
      await dbConnect();

      const data = await Hostel.find().exec();
      console.log(data);
      if (data) {
        res.status(201).json({ hasError: false, data: data });
      } else {
        res
          .status(400)
          .json({ hasError: true, erroeMessage: "SomeThing went wrong" });
      }
    } catch (error) {
      res
        .status(400)
        .json({ hasError: true, erroeMessage: "cannot connect to database" });
    }
  } else if (req.method == "PUT") {
    console.log(req.body.id);

    try {
      //connection to database
      await dbConnect();
      const data = await Hostel.findByIdAndUpdate(req.body.id, {
        resolved: true,
      }).exec();
      console.log(data);
      if (data) {
        res.status(201).json({ hasError: false, data: data });
      } else {
        res
          .status(400)
          .json({ hasError: true, erroeMessage: "SomeThing went wrong" });
      }
    } catch (error) {
      res
        .status(400)
        .json({ hasError: true, erroeMessage: "cannot connect to database" });
    }
  } else {
    res.status(400).json({ hasError: true, erroeMessage: "wrong request" });
  }
}
