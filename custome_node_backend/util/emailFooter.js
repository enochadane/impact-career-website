const emailFooter = (applyLink, subscribeLink, unsubscribeLink) => {
  return `
  <table style="width:100%;max-width:600px;margin:auto;font-family:Arial, sans-serif;">
  <tr>
    <td style="text-align:center;padding:20px;">
      <p style="font-size:18px;margin-bottom:20px;">There is a resume sent as an attachment. You can use it to apply.</p>
      <div style="margin:20px auto;text-align:center;">
        <a href="${applyLink}" style="background-color:#4CAF50;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:block;font-size:16px;border-radius:5px;">Apply</a>
      </div>
      <div style="display:block;font-size:16px;margin-top:20px;text-align:center;">
        <a href="${subscribeLink}" style="margin:0 10px;text-decoration:underline;color:#4CAF50;display:inline-block;">Subscribe</a>
        <span style="margin:0 10px;color:#ccc;">|</span>
        <a href="${unsubscribeLink}" style="margin:0 10px;text-decoration:underline;color:#4CAF50;display:inline-block;">Unsubscribe</a>
      </div>
    </td>
  </tr>
</table>

    `;
};

module.exports = emailFooter;
