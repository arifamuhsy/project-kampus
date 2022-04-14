import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:async () => {
      const m= await import('./main/main.module');
      return m.MainModule;
    },
  },
  {
    path: '',
    loadChildren:async () => {
      const m= await import('./auth/auth.module');
      return m.AuthModule;
    },
  },
  {
    path: '',
    loadChildren:async () => {
      const m= await import('./student/student.module');
      return m.StudentModule;      
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
