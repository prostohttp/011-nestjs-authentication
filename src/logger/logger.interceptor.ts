import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, catchError, map, of } from "rxjs";

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        status: "success",
        data,
      })),
      catchError((error) =>
        of({
          status: "fail",
          data: error,
        }),
      ),
    );
  }
}
