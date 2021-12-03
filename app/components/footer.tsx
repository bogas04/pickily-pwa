import { HTMLAttributes } from "react";
import { Link, useLocation } from "remix";
import type { LinkProps } from "remix";

export { default as footerStylesUrl } from "~/styles/footer.css";

export function Footer() {
  const { pathname } = useLocation();
  return (
    <footer className="footer-component">
      <nav>
        <ul>
          <li>
            <FooterLink to="/">
              <Home filled={pathname === "/"} style={{ marginBottom: 4 }} />
              Home
            </FooterLink>
          </li>
          <li>
            <FooterLink to="orders">
              <Orders
                filled={pathname === "/orders"}
                style={{ marginBottom: 4 }}
              />
              Orders
            </FooterLink>
          </li>
          <li>
            <FooterLink to="account">
              <Account
                filled={pathname === "/account"}
                style={{ marginBottom: 4 }}
              />
              Account
            </FooterLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

function FooterLink(props: LinkProps) {
  const { pathname } = useLocation();
  return (
    <Link
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "16px",
        color: pathname === props.to ? "#039855" : "#667085",
      }}
    />
  );
}

function Home(props: HTMLAttributes<SVGElement> & { filled?: boolean }) {
  if (!props.filled) {
    return (
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M18.24 8.02a.65.65 0 00-.08-.31l-1.48-3.26V3.08a1.45 1.45 0 00-1.45-1.45H4.76a1.45 1.45 0 00-1.45 1.45v1.37l-1.49 3.3a.64.64 0 00-.07.28v.12c.081.49.272.955.56 1.36v7.42a1.45 1.45 0 001.45 1.45h12.46a1.45 1.45 0 001.45-1.45V9.49a3.12 3.12 0 00.55-1.37.339.339 0 00.02-.1zM4.56 3.08a.2.2 0 01.2-.2h10.47a.2.2 0 01.2.2v.87H4.56v-.87zm-.22 2.13h11.31l1.31 2.9a2 2 0 01-1.94 1.53 1.94 1.94 0 01-1.86-1.7.63.63 0 00-.62-.54.63.63 0 00-.62.54 2 2 0 01-2 1.7 1.93 1.93 0 01-1.86-1.7.63.63 0 00-1.24 0A1.94 1.94 0 013 8.11l1.34-2.9zm4.63 11.92v-2.68a1.025 1.025 0 012.05 0v2.68H8.97zm7.26 0h-4v-2.68a2.28 2.28 0 00-4.55 0v2.68H3.77a.2.2 0 01-.2-.2v-6.36a3.1 3.1 0 001.28.32 3.18 3.18 0 002.61-1.27 3.15 3.15 0 002.46 1.27H10a3.19 3.19 0 002.54-1.27A3.131 3.131 0 0015 10.89a3.301 3.301 0 001.43-.33v6.37a.2.2 0 01-.2.2z"
          fill="#667085"
        />
      </svg>
    );
  }
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 13.57a1.25 1.25 0 00-1.25 1.24v3.49h2.47v-3.49A1.25 1.25 0 0010 13.57z"
        fill="#039855"
      />
      <path
        d="M3.55 18.3h3.81v-3.23a2.7 2.7 0 012.11-2.68 2.63 2.63 0 013.16 2.58v3.33h3.82a1 1 0 001-1v-6.82a3.64 3.64 0 01-1.58.37h-.08a3.671 3.671 0 01-2.85-1.47 3.74 3.74 0 01-3 1.47A3.63 3.63 0 017.1 9.38a3.75 3.75 0 01-3 1.47 3.601 3.601 0 01-1.49-.37v6.82a1 1 0 00.94 1z"
        fill="#039855"
      />
      <path
        d="M16.74 4.33V2.7a1 1 0 00-1-1H4.22a1 1 0 00-1 1v1.62L1.66 7.77a2.33 2.33 0 002.2 1.82 2.37 2.37 0 002.35-2 .75.75 0 011.48 0 2.31 2.31 0 002.22 2 2.36 2.36 0 002.35-2 .74.74 0 011.47 0 2.32 2.32 0 002.23 2 2.37 2.37 0 002.31-1.82l-1.53-3.44z"
        fill="#039855"
      />
    </svg>
  );
}

function Orders(props: HTMLAttributes<SVGElement> & { filled?: boolean }) {
  if (!props.filled) {
    return (
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M15.87 18.38a.62.62 0 01-.47-.22l-1.49-1.5-1.51 1.53a.63.63 0 01-.44.18.63.63 0 01-.45-.18L10 16.66l-1.52 1.53a.62.62 0 01-.44.18.67.67 0 01-.45-.18l-1.5-1.53-1.52 1.53a.61.61 0 01-.68.13.62.62 0 01-.39-.57V3.25a1.6 1.6 0 011.6-1.6h9.78a1.6 1.6 0 011.6 1.6v14.5a.62.62 0 01-.44.6.568.568 0 01-.17.03zM10 15.14a.63.63 0 01.44.19l1.52 1.53 1.5-1.53a.63.63 0 01.44-.19.64.64 0 01.45.19l.89.9V3.25a.35.35 0 00-.35-.35H5.11a.35.35 0 00-.35.35v13l.89-.9a.64.64 0 01.45-.19.6.6 0 01.44.19l1.51 1.53 1.51-1.53a.64.64 0 01.44-.21z"
          fill="#667085"
        />
        <path
          d="M11.62 7.33H6.31a.63.63 0 110-1.25h5.31a.63.63 0 010 1.25zM13.9 9.76H6.31a.63.63 0 110-1.25h7.59a.63.63 0 110 1.25zM13.9 12.19H6.31a.632.632 0 01-.653-.884.63.63 0 01.653-.366h7.59a.629.629 0 01.496 1.098.63.63 0 01-.496.152z"
          fill="#667085"
        />
      </svg>
    );
  }
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 3.22v14.53a.62.62 0 00.45.59c.06.01.12.01.18 0a.64.64 0 00.47-.21l1.31-1.33a.25.25 0 01.36 0l1.33 1.35a.64.64 0 00.44.19.64.64 0 00.45-.19l1.33-1.35a.25.25 0 01.36 0l1.34 1.35a.6.6 0 00.44.18.63.63 0 00.45-.18l1.32-1.35a.25.25 0 01.36 0l1.33 1.35a.65.65 0 00.69.14.64.64 0 00.38-.58V3.22a1.6 1.6 0 00-1.6-1.6H5.11a1.61 1.61 0 00-1.61 1.6zm10.19 9h-7.6a.63.63 0 010-1.25h7.6a.63.63 0 010 1.25zM5.47 6.73a.63.63 0 01.62-.63h5.31a.63.63 0 110 1.25H6.09a.62.62 0 01-.62-.65v.03zm.62 1.8h7.6a.63.63 0 010 1.25h-7.6a.63.63 0 010-1.25z"
        fill="#039855"
      />
    </svg>
  );
}

function Account(props: HTMLAttributes<SVGElement> & { filled?: boolean }) {
  if (!props.filled) {
    return (
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10 9.58a4 4 0 110-8 4 4 0 010 8zm0-6.7a2.73 2.73 0 102.72 2.72A2.72 2.72 0 0010 2.88zM15.21 18.38H4.79a1.63 1.63 0 01-1.63-1.63v-1.07a4.74 4.74 0 011.4-3.37 4.8 4.8 0 013.37-1.39h4.15a4.75 4.75 0 014.76 4.76v1.07a1.63 1.63 0 01-1.63 1.63zm-7.28-6.21a3.52 3.52 0 00-3.52 3.51v1.07a.38.38 0 00.38.38h10.42a.38.38 0 00.37-.38v-1.07a3.52 3.52 0 00-3.51-3.51H7.93z"
          fill="#667085"
        />
      </svg>
    );
  }
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 9.75a4 4 0 100-8 4 4 0 000 8zM4.35 18.33a1 1 0 01-1-1v-1.89A4.44 4.44 0 017.78 11h4.44a4.44 4.44 0 014.43 4.44v1.89a1 1 0 01-1 1H4.35z"
        fill="#039855"
      />
    </svg>
  );
}
