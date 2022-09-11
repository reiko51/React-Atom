export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        // このままでは表示されない↓
        // https://unsplash.com/ja/%E5%86%99%E7%9C%9F/oU6KZTXhuvk
        src="https://source.unsplash.com/oU6KZTXhuvk"
        alt="プロフィール"
      />
      <p></p>
      <dl>
        <dt>メール</dt>
        <dd>1111@aaaa.com</dd>
        <dt>TEL</dt>
        <dd>000-1111-2222</dd>
        <dt>会社名</dt>
        <dd>ああああ会社</dd>
        <dt>WebWeb</dt>
        <dd>htmllllll.com</dd>
      </dl>
    </div>
  );
};
