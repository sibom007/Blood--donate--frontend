import DDigloge from "@/shared/DDigloge/DDigloge";

const DemoLoginInfo = () => {
  return (
    <div>
      <DDigloge
        ButtonName="Demo Login Info"
        sx={{
          backgroundColor: "#A5C9CA",
          width: "100%",
          px: 3,
          py: 1,
          borderRadius: "6px",
          color: "white",
          mt: 2,
          "&:hover": {
            backgroundColor: "#A5C9CA",
          },
        }}
        title="Demo Login Info"
        Disciption="AdminEmail : johndoe@example3.com,AdminPassword : user123"
      />
    </div>
  );
};

export default DemoLoginInfo;
