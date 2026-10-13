%% Plotting the graphs of polynomials of degree 4 and 5, their 
%%first and second derivatives and analysis of these graphs.

%Shushank

close all;
clc;

% Define a range of x values
x = linspace(-2, 2, 1000);

% Define coefficients for the degree 4 and 5 polynomials
coefficients_deg4 = [1, -3, 2, 0, 1];
coefficients_deg5 = [0.5, 1, -2, -1, 2, 1];

% Evaluate the polynomials and their derivatives
poly_deg4 = polyval(coefficients_deg4, x);
poly_deg5 = polyval(coefficients_deg5, x);

% Calculate first and second derivatives
poly_deg4_derivative1 = polyder(coefficients_deg4);
poly_deg5_derivative1 = polyder(coefficients_deg5);

poly_deg4_derivative2 = polyder(poly_deg4_derivative1);
poly_deg5_derivative2 = polyder(poly_deg5_derivative1);

% Create graph for Degree 4 Polynomial
figure(1);
plot(x, poly_deg4);
title('Degree 4 Polynomial');
xlabel('x');
ylabel('y');
grid on;

% Create graph for Degree 5 Polynomial
figure(2);
plot(x, poly_deg5);
title('Degree 5 Polynomial');
xlabel('x');
ylabel('y');
grid on;

% Create graph for First Derivative of Degree 4 Polynomial
figure(3);
plot(x, polyval(poly_deg4_derivative1, x));
title('First Derivative of Degree 4 Polynomial');
xlabel('x');
ylabel('y');
grid on;

% Create graph for First Derivative of Degree 5 Polynomial
figure(4);
plot(x, polyval(poly_deg5_derivative1, x));
title('First Derivative of Degree 5 Polynomial');
xlabel('x');
ylabel('y');
grid on;

% Create graph for Second Derivative of Degree 4 Polynomial
figure(5);
plot(x, polyval(poly_deg4_derivative2, x));
title('Second Derivative of Degree 4 Polynomial');
xlabel('x');
ylabel('y');
grid on;

% Create graph for Second Derivative of Degree 5 Polynomial
figure(6);
plot(x, polyval(poly_deg5_derivative2, x));
title('Second Derivative of Degree 5 Polynomial');
xlabel('x');
ylabel('y');
grid on;
