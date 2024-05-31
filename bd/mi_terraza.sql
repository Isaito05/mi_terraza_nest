-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-06-2024 a las 00:00:50
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mi_terraza`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_bodega`
--

CREATE TABLE `t_bodega` (
  `BOD_ID` int(11) NOT NULL,
  `BOD_STOCK_MINIMO` int(11) NOT NULL,
  `BOD_ESTADO` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `BOD_PROPROV_ID` int(11) NOT NULL,
  `BOD_ESTADOE` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `t_bodega`
--

INSERT INTO `t_bodega` (`BOD_ID`, `BOD_STOCK_MINIMO`, `BOD_ESTADO`, `BOD_PROPROV_ID`, `BOD_ESTADOE`) VALUES
(15, 2, 'PERECEDERO', 15, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_pago`
--

CREATE TABLE `t_pago` (
  `PAGO_ID` int(11) NOT NULL,
  `PAGO_FECHA` date NOT NULL,
  `PAGO_MONTO` decimal(10,0) NOT NULL,
  `PAGO_RGU_ID` int(11) NOT NULL,
  `PAGO_DESCRIPCION` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `PAGO_ESTADO` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `t_pago`
--

INSERT INTO `t_pago` (`PAGO_ID`, `PAGO_FECHA`, `PAGO_MONTO`, `PAGO_RGU_ID`, `PAGO_DESCRIPCION`, `PAGO_ESTADO`) VALUES
(25, '2023-03-22', '30000', 53, 'Pago del dia ', 1),
(26, '2023-02-14', '10000', 53, 'debe todo', 1),
(27, '2023-01-25', '20000', 53, '&lt;p&gt;&lt;span style=&quot;color: rgb(241, 196, 15);&quot;&gt;&lt;em&gt;&lt;strong&gt;ajjaaaa&lt;', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_pedido`
--

CREATE TABLE `t_pedido` (
  `PED_ID` int(11) NOT NULL,
  `PED_FECHA` datetime NOT NULL,
  `PED_ESTADO` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `PED_RGU_ID` int(11) NOT NULL,
  `PED_INFO` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`PED_INFO`)),
  `PED_DESCRIPCION` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `PED_PRECIO_TOTAL` double NOT NULL,
  `PED_ESTADOE` int(11) NOT NULL DEFAULT 1,
  `PED_NOTIFICACION` varchar(20) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'pedidoActivo',
  `PED_CANCELADO` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `PED_MET_PAGO` varchar(40) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `t_pedido`
--

INSERT INTO `t_pedido` (`PED_ID`, `PED_FECHA`, `PED_ESTADO`, `PED_RGU_ID`, `PED_INFO`, `PED_DESCRIPCION`, `PED_PRECIO_TOTAL`, `PED_ESTADOE`, `PED_NOTIFICACION`, `PED_CANCELADO`, `PED_MET_PAGO`) VALUES
(34, '2023-03-15 00:00:00', 'Cancelado', 52, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"3\",\"cantidad\":\"1\"}]', '', 53000, 1, 'pedidoFinalizado', 'np se ', ''),
(46, '1970-01-01 12:51:40', 'Pendiente', 52, '[{\"id\":\"4\",\"cantidad\":\"3\"}]', '', 57000, 2, 'pedidoActivo', '', ''),
(47, '2023-03-15 04:06:37', 'Cancelado', 52, '[{\"id\":\"4\",\"cantidad\":\"3\"}]', '', 57000, 1, 'pedidoActivo', 'kuhgiug', ''),
(48, '2023-03-16 01:08:26', 'Cancelado', 54, '[{\"id\":\"4\",\"cantidad\":\"3\"},{\"id\":\"3\",\"cantidad\":\"2\"}]', '', 87000, 1, 'pedidoActivo', '', ''),
(49, '2023-03-16 06:46:22', 'Cancelado', 52, '[{\"id\":\"4\",\"cantidad\":\"3\"},{\"id\":\"3\",\"cantidad\":\"2\"}]', '', 87000, 1, 'pedidoActivo', 'toma', ''),
(50, '2023-03-16 06:46:23', 'Cancelado', 52, '[{\"id\":\"4\",\"cantidad\":\"3\"},{\"id\":\"3\",\"cantidad\":\"2\"}]', '', 87000, 1, 'pedidoActivo', '', ''),
(51, '2023-03-16 06:46:25', 'Pendiente', 52, '[{\"id\":\"4\",\"cantidad\":\"3\"},{\"id\":\"3\",\"cantidad\":\"2\"}]', '', 87000, 1, 'pedidoActivo', '', ''),
(52, '2023-03-17 02:10:36', 'Pendiente', 52, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"3\",\"cantidad\":\"1\"}]', '', 53000, 1, 'pedidoActivo', '', ''),
(53, '2023-03-17 07:19:54', 'Pendiente', 52, '[{\"id\":\"3\",\"cantidad\":\"2\"},{\"id\":\"4\",\"cantidad\":\"1\"},{\"id\":\"2\",\"cantidad\":\"2\"}]', '', 249000, 1, 'pedidoActivo', '', ''),
(54, '2023-03-17 07:52:10', 'Pendiente', 52, '[{\"id\":\"3\",\"cantidad\":\"2\"},{\"id\":\"4\",\"cantidad\":\"4\"},{\"id\":\"2\",\"cantidad\":\"2\"}]', '', 306000, 1, 'pedidoActivo', '', ''),
(55, '2023-03-17 07:57:19', 'Pendiente', 52, '[{\"id\":\"3\",\"cantidad\":\"2\"},{\"id\":\"4\",\"cantidad\":\"4\"},{\"id\":\"2\",\"cantidad\":\"3\"}]', '', 406000, 1, 'pedidoActivo', '', ''),
(56, '2023-03-17 07:58:06', 'Cancelado', 54, '[{\"id\":\"3\",\"cantidad\":\"2\"},{\"id\":\"4\",\"cantidad\":\"1\"},{\"id\":\"2\",\"cantidad\":\"3\"}]', '', 349000, 1, 'pedidoActivo', '', ''),
(57, '2023-03-17 07:58:57', 'Cancelado', 52, '[{\"id\":\"3\",\"cantidad\":\"2\"},{\"id\":\"4\",\"cantidad\":\"1\"},{\"id\":\"2\",\"cantidad\":\"3\"}]', '', 349000, 1, 'pedidoActivo', '', ''),
(58, '2023-03-17 08:03:04', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"3\"},{\"id\":\"3\",\"cantidad\":\"1\"}]', '', 72000, 1, 'pedidoActivo', 'TA LEJOS', ''),
(59, '2023-03-17 08:05:40', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"3\"},{\"id\":\"3\",\"cantidad\":\"1\"}]', '', 72000, 1, 'pedidoActivo', 'dsfgh', ''),
(60, '2023-03-17 08:06:22', 'Cancelado', 54, '[{\"id\":\"3\",\"cantidad\":\"2\"},{\"id\":\"4\",\"cantidad\":\"1\"},{\"id\":\"2\",\"cantidad\":\"3\"}]', '', 349000, 1, 'pedidoActivo', '', ''),
(61, '2023-03-17 08:07:43', 'Cancelado', 52, '[{\"id\":\"3\",\"cantidad\":\"2\"},{\"id\":\"4\",\"cantidad\":\"1\"},{\"id\":\"2\",\"cantidad\":\"3\"}]', '', 349000, 1, 'pedidoActivo', 'jhsejkgsjk', ''),
(62, '2023-03-21 09:23:02', 'Enviado', 54, '[{\"id\":\"4\",\"cantidad\":\"3\"}]', '', 57000, 1, 'pedidoActivo', '', ''),
(63, '2023-03-21 03:41:03', 'Cancelado', 54, '[{\"id\":\"3\",\"cantidad\":\"3\"}]', '', 45000, 1, 'pedidoActivo', 'muy lejoa', ''),
(64, '2023-03-29 10:42:07', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"}]', 'ajaaaaaaaaaaa', 38000, 1, 'pedidoActivo', '', ''),
(65, '2023-04-04 06:02:16', 'Enviado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"}]', '', 38000, 1, 'pedidoActivo', '', ''),
(66, '2023-04-04 07:00:43', 'Cancelado', 52, '[{\"id\":\"4\",\"cantidad\":\"3\"}]', '', 57000, 1, 'pedidoActivo', 'Porque si.', ''),
(67, '2023-04-06 10:11:22', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"}]', '', 38000, 1, 'pedidoActivo', 'No recibi el pago', ''),
(68, '2023-04-06 11:30:51', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', 'dfdfsdfdfs', 165000, 1, 'pedidoActivo', '', 'contraEntrega'),
(69, '2023-04-06 11:31:46', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', 'dfdfsdfdfs', 165000, 1, 'pedidoActivo', '', 'contraEntrega'),
(70, '2023-04-06 11:35:21', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', 'dfdfsdfdfs', 165000, 1, 'pedidoActivo', '', 'contraEntrega'),
(71, '2023-04-06 11:40:18', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', 'contraEntrega'),
(72, '2023-04-06 11:47:10', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', 'contraEntrega'),
(73, '2023-04-06 11:53:05', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', 'contraEntrega'),
(74, '2023-04-06 11:53:55', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', 'entregaInmediata'),
(75, '2023-04-06 12:04:49', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', ''),
(76, '2023-04-06 12:04:52', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', ''),
(77, '2023-04-06 12:06:29', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', ''),
(78, '2023-04-06 12:12:36', 'Cancelado', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', 'true'),
(79, '2023-04-06 12:13:18', 'Pendiente', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', 'false'),
(80, '2023-04-06 12:14:15', 'Pendiente', 51, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', 'true'),
(81, '2023-04-06 03:05:13', 'Enviado', 54, '[{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"2\",\"cantidad\":\"1\"}]', 'la quieor con queso azul', 115000, 1, 'pedidoActivo', '', 'true'),
(82, '2023-04-07 01:48:46', 'Pendiente', 52, '[{\"id\":\"4\",\"cantidad\":\"2\"},{\"id\":\"2\",\"cantidad\":\"1\"},{\"id\":\"3\",\"cantidad\":\"1\"},{\"id\":\"6\",\"cantidad\":\"1\"}]', '', 165000, 1, 'pedidoActivo', '', 'true');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_prestamo`
--

CREATE TABLE `t_prestamo` (
  `PRES_ID` int(11) NOT NULL,
  `PRES_MONTO` decimal(10,0) NOT NULL,
  `PRES_FECHA` date NOT NULL,
  `PRES_ESTADO` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `PRES_RGU_ID` int(11) NOT NULL,
  `PRES_ESTADOE` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `t_prestamo`
--

INSERT INTO `t_prestamo` (`PRES_ID`, `PRES_MONTO`, `PRES_FECHA`, `PRES_ESTADO`, `PRES_RGU_ID`, `PRES_ESTADOE`) VALUES
(20, '50000', '2023-01-15', 'pretado', 53, 1),
(21, '50000', '2023-03-24', '<p><strong>ajaaaaaa</strong></p>', 53, 1),
(22, '10000', '2023-02-20', '&lt;p&gt;iajdjsjk&lt;/p&gt;', 53, 1),
(23, '10000', '2023-12-14', '&lt;p&gt;jsahjasdjhadjhhj&lt;/p&gt;', 53, 2),
(24, '50000', '2023-04-12', 'lkthlkntlhkn', 51, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_prod_venta`
--

CREATE TABLE `t_prod_venta` (
  `PROD_VENTA_ID` int(11) NOT NULL,
  `PROD_VENTA_NOMBRE` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `PROD_VENTA_DESCRIPCION` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `PROD_VENTA_PRECIO` double NOT NULL,
  `PROD_VENTA_IMAGEN` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `PROD_VENTA_ESTADO` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `t_prod_venta`
--

INSERT INTO `t_prod_venta` (`PROD_VENTA_ID`, `PROD_VENTA_NOMBRE`, `PROD_VENTA_DESCRIPCION`, `PROD_VENTA_PRECIO`, `PROD_VENTA_IMAGEN`, `PROD_VENTA_ESTADO`) VALUES
(2, 'Pizza con queso', ' Con full queso extra ques', 100000, 'public/assets/img/img_u/640b7735cbab0p6.jpg', 1),
(3, 'Pizza con peperoni', ' Con full peperoniiiiiiiii', 15000, 'public/assets/img/img_u/640b775b4a26cp4.jpg', 1),
(4, 'Pizza con polllo 2', 'Con full pollo del lado de la pechuga sdfsdfdsgfsdxgsg fgdfgdfgd dgfdfhdghgfgf', 19000, 'public/assets/img/img_u/640b777f06804p3.jpg', 1),
(5, 'PIZZA ', 'Con full queso', 20000, 'public/assets/img/img_u/64276bb0ea5fep4.jpg', 1),
(6, 'PIZZA ', 'iuasgfiuwqgfiug', 12000, 'public/assets/img/img_u/64276e2261b03margarita.jpg', 1),
(7, 'PAPAS', 'uiqwyguey', 10000, 'public/assets/img/img_u/642f0a2555390cuatroqueso.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_proveedor`
--

CREATE TABLE `t_proveedor` (
  `PROV_ID` int(11) NOT NULL,
  `PROV_NOMBRE` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `PROV_CORREO` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `PROV_TELEFONO` bigint(11) NOT NULL,
  `PROV_DIRECCION` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `PROV_NIT` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `PROV_ESTADO` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `t_proveedor`
--

INSERT INTO `t_proveedor` (`PROV_ID`, `PROV_NOMBRE`, `PROV_CORREO`, `PROV_TELEFONO`, `PROV_DIRECCION`, `PROV_NIT`, `PROV_ESTADO`) VALUES
(13, 'Las delicias', 'delicias@gmail.com', 1234567890, 'Calle 23 # 78-67', '0', 2),
(14, 'SAMUEL', 'isaacdavid@gmail.com', 2435678911, '23 # 78-67', '99', 1),
(15, 'PAPAS', 'pablo@gmail.com', 1234567890, 'Calle 23 # 78-67', 'JH22', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_pro_prov`
--

CREATE TABLE `t_pro_prov` (
  `PROPROV_ID` int(11) NOT NULL,
  `PROPROV_NOMBRE` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `PROPROV_CANTIDAD` int(11) NOT NULL,
  `PROPROV_FCH_INGRESO` date NOT NULL,
  `PROPROV_PRECIO_UNITARIO` decimal(10,0) NOT NULL,
  `PROPROV_DESCRIPCION` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `PROPROV_PROV_ID` int(11) NOT NULL,
  `PROPROV_ESTADO` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `t_pro_prov`
--

INSERT INTO `t_pro_prov` (`PROPROV_ID`, `PROPROV_NOMBRE`, `PROPROV_CANTIDAD`, `PROPROV_FCH_INGRESO`, `PROPROV_PRECIO_UNITARIO`, `PROPROV_DESCRIPCION`, `PROPROV_PROV_ID`, `PROPROV_ESTADO`) VALUES
(15, 'PAPAS', 2, '2023-03-15', '122', ' dsd', 13, 1),
(16, 'DASD', 33, '2023-03-15', '223', ' ASDDA', 13, 1),
(17, 'El sabor', 5, '2023-03-17', '14', ' 4AJS', 14, 1),
(18, 'queso', 5, '2023-03-21', '1000', 'asdbkjsbdkajbsdkjbkjjj', 14, 2),
(19, 'peperoni', 5, '2023-03-21', '1000', 'lkskjdbfksjdbfkj', 14, 1),
(20, 'queso por', 4, '2023-03-06', '100000', 'lsndlfknsldnflk', 13, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_rgu_usuario`
--

CREATE TABLE `t_rgu_usuario` (
  `RGU_ID` int(11) NOT NULL,
  `RGU_IDENTIFICACION` int(11) NOT NULL,
  `RGU_NOMBRES` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `RGU_APELLIDOS` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `RGU_GENERO` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `RGU_DIRECCION` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `RGU_CORREO` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `RGU_TELEFONO` bigint(20) NOT NULL,
  `RGU_ROL` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `RGU_TP_DOC` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `RGU_PASSWORD` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `RGU_ESTADO` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `t_rgu_usuario`
--

INSERT INTO `t_rgu_usuario` (`RGU_ID`, `RGU_IDENTIFICACION`, `RGU_NOMBRES`, `RGU_APELLIDOS`, `RGU_GENERO`, `RGU_DIRECCION`, `RGU_CORREO`, `RGU_TELEFONO`, `RGU_ROL`, `RGU_TP_DOC`, `RGU_PASSWORD`, `RGU_ESTADO`) VALUES
(51, 123, 'ISAAC DAVID', 'DE LEON DIAZ', 'Masculino', 'Cra 15 # 43 54', 'deleondiaz@gmail.com', 1234567890, 'Administrador', 'Cedula', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1),
(52, 456, 'luisa', 'mendoza', 'Femenino', 'Calle 23 # 78-67', 'luisa@gmail.com', 9876543218, 'Cliente', 'Cedula', '51eac6b471a284d3341d8c0c63d0f1a286262a18', 1),
(53, 789, 'yeider ', 'jimenes', 'No_binario', 'CALLE 23 # 78-67', 'yeiderdavid@gmail.com', 1234567890, 'Trabajador', 'Cedula', 'fc1200c7a7aa52109d762a9f005b149abef01479', 1),
(54, 987, 'giyu', 'perre', 'Masculino', 'Calle 23 # 78-67', 'giyu@gmail.com', 1234567890, 'Cliente', 'Cedula', '8abcda2dba9a5c5c674e659333828582122c5f56', 1),
(55, 20204567, 'kajs', 'ñslañ', 'Masculino', 'C 30 76 - 42', 'isaacdavid@gmail.com', 1234567800, 'Cliente', 'Cedula', '7c38ee40015767dc2e4da90cda1b379a45680245', 2),
(56, 3456, 'gffggf', 'fhghhg', 'Masculino', 'Calle 23 # 78-67', 'pablo@gmail.com', 1234567890, 'Cliente', 'Cedula', 'ae8fe380dd9aa5a7a956d9085fe7cf6b87d0d028', 2),
(57, 999, 'Benitooooo', 'Juanessss', 'Femenino', 'Calle 23 # 78-67', 'beni@gmail.com', 1234567890, 'Cliente', 'Cedula', 'afc97ea131fd7e2695a98ef34013608f97f34e1d', 2),
(58, 3838, 'kjusga', 'ajish', 'No_binario', 'Calle 23 # 78-67', 'pablo@gmail.com', 1234567890, 'Cliente', 'Tarjeta_Identidad', 'f101946edcfca92f00a8fac3468cdd87e84ac2d7', 2),
(59, 444, 'esneider', 'salazar', 'No_binario', 'Cra 15 # 43 54', 'esne@gmail.com', 3333333333, 'Cliente', 'Tarjeta_Identidad', '9a3e61b6bcc8abec08f195526c3132d5a4a98cc0', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `t_bodega`
--
ALTER TABLE `t_bodega`
  ADD PRIMARY KEY (`BOD_ID`),
  ADD KEY `BOD_PROPROV_ID` (`BOD_PROPROV_ID`);

--
-- Indices de la tabla `t_pago`
--
ALTER TABLE `t_pago`
  ADD PRIMARY KEY (`PAGO_ID`);

--
-- Indices de la tabla `t_pedido`
--
ALTER TABLE `t_pedido`
  ADD PRIMARY KEY (`PED_ID`),
  ADD KEY `PED_RGU_ID` (`PED_RGU_ID`);

--
-- Indices de la tabla `t_prestamo`
--
ALTER TABLE `t_prestamo`
  ADD PRIMARY KEY (`PRES_ID`),
  ADD KEY `PRES_RGU_ID` (`PRES_RGU_ID`);

--
-- Indices de la tabla `t_prod_venta`
--
ALTER TABLE `t_prod_venta`
  ADD PRIMARY KEY (`PROD_VENTA_ID`);

--
-- Indices de la tabla `t_proveedor`
--
ALTER TABLE `t_proveedor`
  ADD PRIMARY KEY (`PROV_ID`);

--
-- Indices de la tabla `t_pro_prov`
--
ALTER TABLE `t_pro_prov`
  ADD PRIMARY KEY (`PROPROV_ID`),
  ADD KEY `PROPROV_PROV_ID` (`PROPROV_PROV_ID`);

--
-- Indices de la tabla `t_rgu_usuario`
--
ALTER TABLE `t_rgu_usuario`
  ADD PRIMARY KEY (`RGU_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `t_bodega`
--
ALTER TABLE `t_bodega`
  MODIFY `BOD_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `t_pago`
--
ALTER TABLE `t_pago`
  MODIFY `PAGO_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `t_pedido`
--
ALTER TABLE `t_pedido`
  MODIFY `PED_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de la tabla `t_prestamo`
--
ALTER TABLE `t_prestamo`
  MODIFY `PRES_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `t_prod_venta`
--
ALTER TABLE `t_prod_venta`
  MODIFY `PROD_VENTA_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `t_proveedor`
--
ALTER TABLE `t_proveedor`
  MODIFY `PROV_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `t_pro_prov`
--
ALTER TABLE `t_pro_prov`
  MODIFY `PROPROV_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `t_rgu_usuario`
--
ALTER TABLE `t_rgu_usuario`
  MODIFY `RGU_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `t_bodega`
--
ALTER TABLE `t_bodega`
  ADD CONSTRAINT `t_bodega_ibfk_1` FOREIGN KEY (`BOD_PROPROV_ID`) REFERENCES `t_pro_prov` (`PROPROV_ID`);

--
-- Filtros para la tabla `t_pedido`
--
ALTER TABLE `t_pedido`
  ADD CONSTRAINT `t_pedido_ibfk_1` FOREIGN KEY (`PED_RGU_ID`) REFERENCES `t_rgu_usuario` (`RGU_ID`);

--
-- Filtros para la tabla `t_prestamo`
--
ALTER TABLE `t_prestamo`
  ADD CONSTRAINT `t_prestamo_ibfk_1` FOREIGN KEY (`PRES_RGU_ID`) REFERENCES `t_rgu_usuario` (`RGU_ID`);

--
-- Filtros para la tabla `t_pro_prov`
--
ALTER TABLE `t_pro_prov`
  ADD CONSTRAINT `t_pro_prov_ibfk_1` FOREIGN KEY (`PROPROV_PROV_ID`) REFERENCES `t_proveedor` (`PROV_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
