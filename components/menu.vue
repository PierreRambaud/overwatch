<template>
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">Overwatch</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/notifications">
                    Notifications
                </b-nav-item>

                <b-nav-item to="/issues">
                    Issues
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
