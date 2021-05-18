# requestAjax

### Inicialização:
`
const requestAjax = new RequestAjax('{{ csrf_token() }}');
`

### Utilização:
```
const requestAjaxData = new RequestAjaxData("<RotaAqui>");

requestAjaxData.setData(data);
// OU
requestAjaxData.propertyAdd('<NomePropriedade>', <valorPropriedade>);



requestAjaxData.callbackActionSuccess = (result) => {

}

requestAjaxData.callbackActionError = (result) => {

}

requestAjaxData.callbackActionComplete = () => {

}

requestAjax.request(requestAjaxData);
```
