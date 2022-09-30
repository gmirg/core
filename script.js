// Elabora un programa que permita averiguar si una persona debe sacar su CUIL, 
// sabiendo su fecha de nacimiento. El Código Único de Identificación Laboral (CUIL) 
// es el número que se otorga a todo trabajador al inicio de su actividad laboral en relación 
// de dependencia (mayores de 17 años) que pertenezca al Sistema Integrado de Jubilaciones y Pensiones (SIJP), 
// y a toda otra persona que gestione alguna prestación o servicio de la Seguridad Social en la República Argentina.
function teDaCuil() {
    let year = parseInt(prompt("Introduce tu año de nacimiento completo (cuatro cifras)"));
    const fechaActual = [30, 09, 2022];
    switch (true) {
        case (fechaActual[2] - year < 17):
            let benefit = confirm("Recibes actualmente alguna ayuda?");
        case ((fechaActual[2] - year < 17) && benefit):
            debugger;
            alert("Tienes CUIL ya que recibes prestación");
            break;
        case ((fechaActual[2] - year == 17) && (fechaActual[1] < month)):
            alert("No es necesario CUIL ya que aun eres menor de edad");
            break;
        case ((fechaActual[2] - year == 17) && (fechaActual[1] < month)) && benefit:
            alert("Tienes CUIL ya que recibes una prestación");
            break;
        case ((fechaActual[2] - year >= 17)):
            let worked = confirm("Has trabajado alguna vez?");
        case ((fechaActual[2] - year >= 17) && !!worked):
            debugger;
            alert("No tienes CUIL ya que no has trabajado nunca");
            break;
        default:
            alert("No tienes CUIL");
            break;
    }
}
// No me esta dando el resultado correcto porque no estoy utilizando los condicionales correctamente 
// y tengo que hacer que todos los casos me validen a true, que no se esta dando en este momento pero no me da tiempo