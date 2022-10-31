var promcode_model = require('../../model/adminmodel/dashboard/promocode_m');

exports.insertpromocode = function (req, res) {


  // res.send("ok");

  const { promocode } = req.body;
  const { description } = req.body;
  const { discount } = req.body;
  const { heading } = req.body;
  const { upto } = req.body;
  const {minimum}=req.body;




  async function check(params) {
    var promoData = await promcode_model.findOne({ promocode: promocode });



    if (promoData) {
      res.send({ msg: "exist" });
      //  console.log("exist")
    }

    else {
      const genratepromo = new promcode_model({

        promocode: promocode,
        description: description,
        discount: discount,
        heading: heading,
        upto:upto,
        minimum:minimum


      });

      genratepromo.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
    }


  }
  check()

}

exports.Showpromocodelist = function (req, res) {


  // res.send("ok");
  promcode_model.find((error, data) => {


    if (error) {
      res.json({ slider: error })
    } else {
      // res.send({mgs:data.tiffin_cat})
      res.json(data)
      // console.log(data.promocode)
    }
  })

}
exports.deletepromocode = function (req, res) {
  const { _id } = req.body;

  console.log(_id)

  async function removepromocode(params) {
    var getpromocode = await promcode_model.findOne({ _id: _id });

    if (getpromocode) {

      promcode_model.deleteOne({ _id: _id }).then(
        () => {
          res.status(200).json({
            msg: 'success'
          });
        }
      ).catch(
        (error) => {
          res.status(200).json({
            msg: 'failure'
          });
        }
      );



    }
  }

  removepromocode();

}
