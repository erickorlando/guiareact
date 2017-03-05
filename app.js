class Empleado extends React.Component {
    render() {
        return (
            <li>
                {this.props.nombre} - {this.props.email}
            </li>
        );
    }
}

class ListaEmpleados extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.empleados.map(empleado => {
                        return (
                            <Empleado
                                key={empleado.id}
                                nombre={empleado.nombre}
                                email={empleado.email}
                            />
                        );
                    })}
                </ul>
                <form onSubmit={this.props.onAddEmployee} >
                    <input type="text" placeholder="Nombre" name="nombre" />
                    <input type="email" placeholder="Email" name="email" />
                    <input type="submit" value="Guardar" />
                </form>
            </div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            empleados: [
                { id: 1, nombre: "Pepe", email: "pepe@correo.com" },
                { id: 2, nombre: "Paco", email: "paco@email.es" }
            ]
        };
    }

    handleOnAddEmployee(event) {
        event.preventDefault();
        let empleado = {
            nombre: event.target.nombre.value,
            email: event.target.email.value
        };
        this.setState({
            empleados: this.state.empleados.concat([empleado])
        });
    }

    render() {
        console.log(this.state.empleados);
        return (
            <ListaEmpleados
                empleados={this.state.empleados}
                onAddEmployee={this.handleOnAddEmployee.bind(this)}
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));