const QRCode = require('qrcode');

const getAction = async (req, res) => {
  try {
    const id = req.params.id;
    const code = await QRCode.toDataURL(`http://${req.headers.host}/qr/${id}`);
    return { code };
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

exports.QRController = {
  getAction,
};