# README

# Instalación
Si no se tiene instalado bundler
`gem install bundler`
Instalar dependencias
`bundle install`
Crear base de datos en postgres
`createdb fullstack-sample`
Ejecutar migraciones
`rake db:migrate`
Popular base de datos con el archivo csv
`rake db:seed`
Iniciar servidor
`rails s`
El servidor estará respondiendo en:
`localhost:3000/admin`
# Bugs
* Al regresar a una página anterior el listado no se actualiza hasta que se hace refresh a la página