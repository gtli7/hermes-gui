import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authenticationService.logout()
                location.reload()
            }

            return throwError(() => this.translateError(err.status))
        }));
    }

    public translateError(errorStatus) {
        var language = localStorage.getItem('language')
        var message = ''

        switch (language) {
            case 'en-US':
                message = this.englishError(errorStatus)
                break
            case 'pt':
                message = this.portugueseError(errorStatus)
                break
            case 'es':
                message = this.spanishError(errorStatus)
                break
            case 'fr':
                message = this.françaisError(errorStatus)
                break
            // case 'ar':
            //     message = this.arabicError(errorStatus)
            default:
                message = this.englishError(errorStatus)
                break
        }
        return message
    }

    public englishError(errorStatus) {

        switch (errorStatus) {
            case 400:
                return 'Service not found.'
            case 413:
                return 'File is too big, max size is 20.48 MB'
            case 431:
                return 'Request exceeds the size allowed by the server.'
            case 500:
                return 'Internal Server error, please try again. Contact support if the problem persists.'
            default:
                return 'Internal Server error, please try again. Contact support if the problem persists.'
        }
    }

    public portugueseError(errorStatus) {

        switch (errorStatus) {
            case 400:
                return 'Serviço não encontrado.'
            case 413:
                return 'Tamanho do arquivo é muito grande, tamanho maximo é de 20.48 MB.'
            case 431:
                return 'Requisição excede o tamanho permitido pelo servidor.'
            case 500:
                return 'Erro interno no Servidor, por favor tente novamente. Entre em contato com o suporte se o problema persistir.'
            default:
                return 'Erro interno no Servidor, por favor tente novamente. Entre em contato com o suporte se o problema persistir.'
        }
    }

    public spanishError(errorStatus) {

        switch (errorStatus) {
            case 400:
                return 'Servicio no encontrado.'
            case 413:
                return 'El tamaño del archivo es muy grande, el tamaño máximo es 20,48 MB.'
            case 431:
                return 'La solicitud excede el tamaño permitido por el servidor.'
            case 500:
                return 'Error interno del servidor, inténtalo de nuevo. Póngase en contacto con el soporte si el problema persiste.'
            default:
                return 'Error interno del servidor, inténtalo de nuevo. Póngase en contacto con el soporte si el problema persiste.'
        }
    }


    public françaisError(errorStatus) {

        switch (errorStatus) {
            case 400:
                return 'Service introuvable.'
            case 413:
                return 'Le fichier est trop volumineux, la taille maximum est 20.48 MB'
            case 431:
                return 'La demande dépasse la taille autorisée par le serveur.'
            case 500:
                return 'Erreur interne de serveur, veuillez essayer de nouveau. Contactez le support si le problème persiste.'
        }

        return errorStatus
    }

    // public arabicError(errorStatus) {
    //     if (errorStatus == 500)
    //         return ''

    //     if (errorStatus == 400)
    //         return ''

    //     return errorStatus
    // }
}
