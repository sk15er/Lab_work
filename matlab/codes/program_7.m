%% Parametric Curve - Circle

% Shushank

close all;
clc;

% Define the parameter t from 0 to 2*pi
t = linspace(0, 2*pi, 100);

% Define the parametric equations
x = cos(t);  % x-coordinate
y = sin(t);  % y-coordinate

% Plot the parametric curve
plot(x, y, 'b', 'LineWidth', 2);

% Set equal axis scaling
axis equal;

% Add labels and title
xlabel('x(t)');
ylabel('y(t)');
title('Parametric Curve: Circle');

% Turn on the grid
grid on;