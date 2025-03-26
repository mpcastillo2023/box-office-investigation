// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri::{ Manager, Position, Runtime, WebviewWindow};


fn move_window_to_other_monitor<R: Runtime>(
    window: &WebviewWindow<R>,
    i: usize,
) -> tauri::Result<()> {
    let monitors = window.available_monitors()?;
    if monitors.len() > 1 {
            let monitor = monitors
            .get(i).ok_or( tauri::Error::WindowNotFound)?;
        

        let pos = monitor.position();
        window.set_position(*pos)?;
    }


    
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
                let window_main = app.get_webview_window("main").unwrap();
                let window = app.get_webview_window("side").unwrap();
                move_window_to_other_monitor(&window, 1)?;
                move_window_to_other_monitor(&window_main, 0)?;
            }
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
