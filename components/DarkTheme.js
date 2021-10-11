const DarkTheme = () => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --background-color: rgb(14, 14, 14);
            --text-color: white;
            --link-color: rgb(234, 207, 3);
          }
        `}
      </style>
    </>
  );
};

export default DarkTheme;
