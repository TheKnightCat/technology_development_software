import React, { useRef } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "./App.css";

function App() {
  const toast = useRef(null);
  let flag = false;

  function showToast() {
    if (flag)
      toast.current.show({
        severity: "success",
        summary: "Success Message",
        life: 3000,
      });
    else
      toast.current.show({
        severity: "error",
        summary: "Error Message",
        life: 3000,
      });
    flag = !flag;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>Введите цепочку символов </label>

          <div className="p-fluid">
            <div className="p-inputgroup">
              <InputText />
              <Button icon="pi pi-check" onClick={showToast} />
            </div>

            <Toast ref={toast} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
