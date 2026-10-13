%% Taylor series expansion of functions.

% shushank

close all;
clc;
syms x; % define x as an symbolic variable

% define the function for which you want to compute the taylor series
f=sin(x);

% compute the taylor expansion on the point 'a' up to order 'n'
a=0; %The point around which you want to expand 
n=10;%The order of the Taylor series expansion

% Compute the taylor series
taylor_seires=taylor(f,x,a,'order',n);

%Display taylor series
disp('taylor series Expansion');
disp(taylor_seires);
