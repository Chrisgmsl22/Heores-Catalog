import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../src/heroes/routes/PrivateRoute";
 
describe("PrivateRouter", () => {
  test("Debe mostrar sus children si el usuario está logueado", () => {
    render(
      <AuthContext.Provider
        value={{
          logged: true,
          user: "JM",
        }}
      >
        <MemoryRouter>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
 
    expect(screen.getAllByRole("heading", { name: /ruta privada/i }));
  });
//   test("Debe guardar la ruta actual", () => {
//     const history = {
//       replace: jest.fn(),
//     };
 
//     render(
//       <AuthContext.Provider
//         value={{
//           logged: true,
//           user: "JM",
//         }}
//       >
//         <MemoryRouter>
//           <PrivateRoute children={history}>
//             <h1>Ruta privada</h1>
//           </PrivateRoute>  
//         </MemoryRouter>
//       </AuthContext.Provider>
//     );
 
//     expect(history.replace).toHaveBeenCalledWith("/login");
//   });
});