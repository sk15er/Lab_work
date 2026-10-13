%%Computation of limit and differentiation of functions.

% Shushank boss
close all;
clc;
syms x;
% define x as a symbolic variable
% example 1: Compute the limit of a function
f1 = (x^2-1)/(x-1);
limit_f1 = limit(f1,x,1);

% example 2: compute a limit at infinity
f2=exp(x)/x;
limit_f2 = limit(f2,x,inf);

disp("limit");
disp(['Limit of (x^2-1)/(x-1) as x approaches to 1: ' , char(limit_f1)]);
disp(['Limit of exp(x)/x as x approaces to infinity: ', char(limit_f2)]);
syms x;

% define x as symbolic variable

% example 1: diffrentiate a function
f3=x^3+2*x^2-5*x+3;
df3= diff(f3,x);

% Example 2: Diffrentiate trignomatric fn
f4=sin(2*x)*cos(x);
df4 = diff(f4,x);

disp('Derivatives: ');
disp(['derivative of x^3+2*x^2-5*x+3: ', char(df3)]);
disp(['derivative of sin(2*x) * cos(x): ',char(df4) ]);



