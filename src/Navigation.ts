// const Nav = {
//     main: "/",
//     card: {
//         base: "/card",
//         withId: (id: string) => `/card/${id}`,
//     },
//     orders: {
//         base: "/orders",
//         type: {
//             withId: (id: string) => `/orders/type/${id}`,
//         },
//         sales: {
//             test: "/orders/sales/test",
//         },
//     },
// };

export const Nav = {
    card: {
        byId: (id: number) => `/card/${id}`,
    },
    ids: {
        goldenBar: "/#goldenbar",
        packages: "#packages",
        coctails: "#coctails",
        // packages: "#packages",
    },
};

// /orders
// /orders/type/5
// /orders/sales/test

{
    /* <Route to={Nav.card.withId(':id')} element={<cardDetails />}>
<Link to={Nav.card.withId('79')}></Link> */
}
