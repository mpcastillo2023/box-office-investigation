// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri::{ Position, Runtime, WebviewWindow, WebviewWindowBuilder};


fn move_window_to_other_monitor<R: Runtime>(
    window: &WebviewWindow<R>,
    i: usize,
) -> tauri::Result<()> {
    let monitors = window.available_monitors()?;
    if monitors.len() > 1 {
            let monitor = monitors
            .get(i).ok_or_else(|| tauri::Error::FailedToReceiveMessage)?;
        

        let pos = monitor.position();
        window.set_position(Position::Physical(
            tauri::PhysicalPosition{
                x: pos.x,
                y: 0
            })
        )?;
    }


    window.maximize()?;
    
    Ok(())
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_process::init())
        .setup(|app| {
            #[cfg(desktop)]{
                app.handle()
                .plugin(tauri_plugin_updater::Builder::new().build())?;
            let window_main =
            WebviewWindowBuilder::new(app, "main", tauri::WebviewUrl::App("index.html".into()))
                .build()?;
                let window =
                WebviewWindowBuilder::new(app, "local", tauri::WebviewUrl::App("screen2.html".into()))
                    .build()?;
               move_window_to_other_monitor(&window, 1)?;
              move_window_to_other_monitor(&window_main, 0)?;
            }
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
