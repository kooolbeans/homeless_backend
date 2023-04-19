const QRCode = require('qrcode');

const getAction = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const code = await QRCode.toDataURL(`http://${req.headers.host}/qr/${id}`);
    res.status(200).json({ code });
    return { code };
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

exports.QRController = {
  getAction,
};