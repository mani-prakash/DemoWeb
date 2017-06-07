import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {WebService} from './Web.service'

bootstrap(AppComponent, [WebService]);