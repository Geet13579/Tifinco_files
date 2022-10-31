var Jimp = require('jimp');
var fs = require('fs');
var cat_model = require('../../model/adminmodel/Category/ComboProd_Cat_model.js');


exports.insertCategory = function (req, res) {

  const { filename, path } = req.file;

  var cat_name = req.body.cat_name;

  async function check(params) {
    console.log(req.body.cat_name);
    var catData = await cat_model.findOne({ cat_name: req.body.cat_name });

    if (catData) {

      let strC = "./public/category/" + filename;
      console.log(strC);

      if (fs.existsSync(strC)) {
        console.log("if");
        fs.unlinkSync(strC)
        res.send({ msg: "exist" });
      } else {
        console.log("else");
        res.send({ msg: "exist" });
      }

    } else {

      Jimp.read('https://tifinco.com:5000/public/category/' + filename, (err, photo) => {
        if (err) throw err;
        photo.resize(70, 70);
        photo.quality(10);// set JPEG quality
        // photo.greyscale() ;
        photo.write('./public/category/' + filename); // save


        const catimages = new cat_model({

          cat_image: 'https://tifinco.com:5000/public/category/' + filename,
          cat_name: cat_name
        });


        catimages.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });

      });



    }
  }

  check();


}

exports.showcategory = function (req, res) {

  cat_model.find((error, data) => {
    if (error) {
      res.json({ category: error })
    } else {
      res.json(data)
    }
  }).sort({ _id: -1 })
};



exports.delete_category = function (req, res) {
  const { _id } = req.body;

  async function removePhoto(params) {
    var getcat = await cat_model.findOne({ _id: _id });

    if (getcat) {


      console.log(getcat.cat_image);
      let strC = getcat.cat_image.replace("https://tifinco.com:5000", ".");
      console.log(strC);

      if (fs.existsSync(strC)) {

        fs.unlinkSync(strC)


        cat_model.deleteOne({ _id: _id }).then(
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

      } else {


        cat_model.deleteOne({ _id: _id }).then(
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
  }

  removePhoto();

}