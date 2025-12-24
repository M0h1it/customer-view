import apiMain from "./apiMain";

const USE_DUMMY = true; // switch to false when backend is ready

export const CustomerAPI = {
  callWaiter: async (tableId) => {
    if (USE_DUMMY) {
      return { success: true, message: "Waiter called (dummy)" };
    }
    //comments for changing when api is ready
    /**
     Currently
apiMain.post("/customer/request", { ... })


If backend says:

POST /api/customer/request


👉 You do nothing (already correct)

If backend says:

POST /api/customer/call-waiter
POST /api/customer/ask-bill
👉 Change ONLY this:

js
Copy code
callWaiter: (tableId) =>
  apiMain.post("/customer/call-waiter", { tableId }),

askForBill: (tableId) =>
  apiMain.post("/customer/ask-bill", { tableId }),
     */
    const res = await apiMain.post("/customer/request", {
      tableId,
      type: "CALL_WAITER",
    });

    return res.data;
  },

  askForBill: async (tableId) => {
    if (USE_DUMMY) {
      return { success: true, message: "Bill requested (dummy)" };
    }

    const res = await apiMain.post("/customer/request", {
      tableId,
      type: "ASK_BILL",
    });

    return res.data;
  },
};
