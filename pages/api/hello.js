// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    { title: "TOTAL", balance: 409.98 },
    { title: "AVAILABLE", balance: 300.75 },
    { title: "CLAIMABLE REWARDS", balance: 102.32 },
    { title: "DELEGATED", balance: 409.98 },
  ]);
};
